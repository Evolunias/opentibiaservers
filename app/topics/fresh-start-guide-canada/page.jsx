import FreshStartGuideCanadaKeywordPage, { generateMetadata } from './fresh-start-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideCanadaKeywordPage />;
}
