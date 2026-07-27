import AnticaHistoryKeywordPage, { generateMetadata } from './antica-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaHistoryKeywordPage />;
}
