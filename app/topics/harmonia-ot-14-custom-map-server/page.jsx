import HarmoniaOt14CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14CustomMapServerKeywordPage />;
}
