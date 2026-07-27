import HarmoniaOt96CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt96CustomMapServerKeywordPage />;
}
