import HarmoniaOt13PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13PvpServerKeywordPage />;
}
