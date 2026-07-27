import RealMapGuideMexicoKeywordPage, { generateMetadata } from './real-map-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideMexicoKeywordPage />;
}
