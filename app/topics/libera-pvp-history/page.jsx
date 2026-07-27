import LiberaPvpHistoryKeywordPage, { generateMetadata } from './libera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaPvpHistoryKeywordPage />;
}
