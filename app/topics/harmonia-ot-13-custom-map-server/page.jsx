import HarmoniaOt13CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13CustomMapServerKeywordPage />;
}
