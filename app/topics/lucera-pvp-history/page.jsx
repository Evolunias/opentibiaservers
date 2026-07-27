import LuceraPvpHistoryKeywordPage, { generateMetadata } from './lucera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraPvpHistoryKeywordPage />;
}
