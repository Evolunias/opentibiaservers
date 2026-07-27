import ShiveraHistoryKeywordPage, { generateMetadata } from './shivera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraHistoryKeywordPage />;
}
