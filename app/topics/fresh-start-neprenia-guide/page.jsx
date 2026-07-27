import FreshStartNepreniaGuideKeywordPage, { generateMetadata } from './fresh-start-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaGuideKeywordPage />;
}
