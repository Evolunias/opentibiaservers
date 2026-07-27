import TenebraHistoryKeywordPage, { generateMetadata } from './tenebra-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraHistoryKeywordPage />;
}
