import RealMapGuideFranceKeywordPage, { generateMetadata } from './real-map-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideFranceKeywordPage />;
}
