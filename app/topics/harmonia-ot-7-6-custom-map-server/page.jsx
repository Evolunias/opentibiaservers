import HarmoniaOt76CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt76CustomMapServerKeywordPage />;
}
