import HarmoniaOt14NonPvpServerKeywordPage, { generateMetadata } from './harmonia-ot-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14NonPvpServerKeywordPage />;
}
