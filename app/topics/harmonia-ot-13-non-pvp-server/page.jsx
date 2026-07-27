import HarmoniaOt13NonPvpServerKeywordPage, { generateMetadata } from './harmonia-ot-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13NonPvpServerKeywordPage />;
}
