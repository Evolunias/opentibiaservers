import HarmoniaOt15CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15CustomMapServerKeywordPage />;
}
