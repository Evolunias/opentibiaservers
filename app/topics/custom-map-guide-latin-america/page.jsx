import CustomMapGuideLatinAmericaKeywordPage, { generateMetadata } from './custom-map-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideLatinAmericaKeywordPage />;
}
