import KyraHistoryKeywordPage, { generateMetadata } from './kyra-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraHistoryKeywordPage />;
}
