import CustomMapGuideUkKeywordPage, { generateMetadata } from './custom-map-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideUkKeywordPage />;
}
