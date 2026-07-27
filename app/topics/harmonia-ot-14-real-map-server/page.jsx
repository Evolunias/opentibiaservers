import HarmoniaOt14RealMapServerKeywordPage, { generateMetadata } from './harmonia-ot-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14RealMapServerKeywordPage />;
}
