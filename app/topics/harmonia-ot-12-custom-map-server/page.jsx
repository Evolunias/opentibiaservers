import HarmoniaOt12CustomMapServerKeywordPage, { generateMetadata } from './harmonia-ot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12CustomMapServerKeywordPage />;
}
