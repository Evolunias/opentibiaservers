import FideraHistoryKeywordPage, { generateMetadata } from './fidera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraHistoryKeywordPage />;
}
