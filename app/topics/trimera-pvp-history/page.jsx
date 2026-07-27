import TrimeraPvpHistoryKeywordPage, { generateMetadata } from './trimera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraPvpHistoryKeywordPage />;
}
