import HarmoniaOt11RealMapServerKeywordPage, { generateMetadata } from './harmonia-ot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11RealMapServerKeywordPage />;
}
