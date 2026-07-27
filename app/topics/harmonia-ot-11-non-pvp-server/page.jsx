import HarmoniaOt11NonPvpServerKeywordPage, { generateMetadata } from './harmonia-ot-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11NonPvpServerKeywordPage />;
}
