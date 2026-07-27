import FreshStartAlasteraGuideKeywordPage, { generateMetadata } from './fresh-start-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraGuideKeywordPage />;
}
