import HarmoniaOt12RealMapServerKeywordPage, { generateMetadata } from './harmonia-ot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12RealMapServerKeywordPage />;
}
