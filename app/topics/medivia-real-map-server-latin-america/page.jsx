import MediviaRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './medivia-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerLatinAmericaKeywordPage />;
}
