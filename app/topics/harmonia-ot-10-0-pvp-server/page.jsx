import HarmoniaOt100PvpServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100PvpServerKeywordPage />;
}
