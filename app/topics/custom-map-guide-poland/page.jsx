import CustomMapGuidePolandKeywordPage, { generateMetadata } from './custom-map-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuidePolandKeywordPage />;
}
