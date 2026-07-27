import CustomMapGuideEuropeKeywordPage, { generateMetadata } from './custom-map-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideEuropeKeywordPage />;
}
