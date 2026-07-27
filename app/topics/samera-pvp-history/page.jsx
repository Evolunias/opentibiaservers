import SameraPvpHistoryKeywordPage, { generateMetadata } from './samera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraPvpHistoryKeywordPage />;
}
