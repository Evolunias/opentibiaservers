import FreshStartCarlinotGuideKeywordPage, { generateMetadata } from './fresh-start-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotGuideKeywordPage />;
}
