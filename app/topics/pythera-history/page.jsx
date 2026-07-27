import PytheraHistoryKeywordPage, { generateMetadata } from './pythera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraHistoryKeywordPage />;
}
