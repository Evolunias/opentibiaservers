import HarmoniaOt80PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80PvpServerKeywordPage />;
}
