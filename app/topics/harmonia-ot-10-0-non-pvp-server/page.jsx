import HarmoniaOt100NonPvpServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100NonPvpServerKeywordPage />;
}
