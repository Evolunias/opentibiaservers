import HarmoniaOt11CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11CustomMapServerKeywordPage />;
}
