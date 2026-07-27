import MeneraHistoryKeywordPage, { generateMetadata } from './menera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraHistoryKeywordPage />;
}
