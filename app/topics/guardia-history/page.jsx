import GuardiaHistoryKeywordPage, { generateMetadata } from './guardia-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaHistoryKeywordPage />;
}
