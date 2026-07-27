import InfernaHistoryKeywordPage, { generateMetadata } from './inferna-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaHistoryKeywordPage />;
}
