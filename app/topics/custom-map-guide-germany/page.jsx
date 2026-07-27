import CustomMapGuideGermanyKeywordPage, { generateMetadata } from './custom-map-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideGermanyKeywordPage />;
}
