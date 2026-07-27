import RealMapMediviaWebsiteKeywordPage, { generateMetadata } from './real-map-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaWebsiteKeywordPage />;
}
