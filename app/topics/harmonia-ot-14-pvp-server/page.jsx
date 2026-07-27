import HarmoniaOt14PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14PvpServerKeywordPage />;
}
