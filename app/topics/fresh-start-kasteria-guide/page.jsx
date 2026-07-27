import FreshStartKasteriaGuideKeywordPage, { generateMetadata } from './fresh-start-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaGuideKeywordPage />;
}
