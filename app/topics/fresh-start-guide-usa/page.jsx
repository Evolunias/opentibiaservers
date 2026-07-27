import FreshStartGuideUsaKeywordPage, { generateMetadata } from './fresh-start-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideUsaKeywordPage />;
}
