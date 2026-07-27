import HoneraPvpHistoryKeywordPage, { generateMetadata } from './honera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraPvpHistoryKeywordPage />;
}
