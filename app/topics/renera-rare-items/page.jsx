import ReneraRareItemsKeywordPage, { generateMetadata } from './renera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraRareItemsKeywordPage />;
}
