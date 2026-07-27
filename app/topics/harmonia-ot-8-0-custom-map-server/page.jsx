import HarmoniaOt80CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80CustomMapServerKeywordPage />;
}
