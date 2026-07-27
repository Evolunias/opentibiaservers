import HarmoniaOt12NonPvpServerKeywordPage, { generateMetadata } from './harmonia-ot-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12NonPvpServerKeywordPage />;
}
