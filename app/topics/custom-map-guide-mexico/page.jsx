import CustomMapGuideMexicoKeywordPage, { generateMetadata } from './custom-map-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapGuideMexicoKeywordPage />;
}
