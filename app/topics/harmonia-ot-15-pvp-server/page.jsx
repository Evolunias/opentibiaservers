import HarmoniaOt15PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15PvpServerKeywordPage />;
}
