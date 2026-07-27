import VineraHistoryKeywordPage, { generateMetadata } from './vinera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraHistoryKeywordPage />;
}
