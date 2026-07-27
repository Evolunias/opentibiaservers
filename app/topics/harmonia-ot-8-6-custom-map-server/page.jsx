import HarmoniaOt86CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt86CustomMapServerKeywordPage />;
}
