import HarmoniaOt12PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12PvpServerKeywordPage />;
}
