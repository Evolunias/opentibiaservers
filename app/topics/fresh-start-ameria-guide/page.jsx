import FreshStartAmeriaGuideKeywordPage, { generateMetadata } from './fresh-start-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaGuideKeywordPage />;
}
