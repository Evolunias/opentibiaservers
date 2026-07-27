import AnticaPvpHistoryKeywordPage, { generateMetadata } from './antica-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaPvpHistoryKeywordPage />;
}
