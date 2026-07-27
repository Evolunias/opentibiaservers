import HarmoniaPvpHistoryKeywordPage, { generateMetadata } from './harmonia-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaPvpHistoryKeywordPage />;
}
