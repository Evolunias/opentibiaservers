import FreshStartGuideNorthAmericaKeywordPage, { generateMetadata } from './fresh-start-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideNorthAmericaKeywordPage />;
}
