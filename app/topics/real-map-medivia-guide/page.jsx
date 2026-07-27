import RealMapMediviaGuideKeywordPage, { generateMetadata } from './real-map-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaGuideKeywordPage />;
}
