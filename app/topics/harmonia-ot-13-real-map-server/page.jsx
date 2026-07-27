import HarmoniaOt13RealMapServerKeywordPage, { generateMetadata } from './harmonia-ot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13RealMapServerKeywordPage />;
}
