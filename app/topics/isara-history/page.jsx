import IsaraHistoryKeywordPage, { generateMetadata } from './isara-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraHistoryKeywordPage />;
}
