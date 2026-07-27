import RealMapAlasteraGuideKeywordPage, { generateMetadata } from './real-map-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraGuideKeywordPage />;
}
