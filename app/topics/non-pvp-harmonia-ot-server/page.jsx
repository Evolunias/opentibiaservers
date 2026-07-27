import NonPvpHarmoniaOtServerKeywordPage, { generateMetadata } from './non-pvp-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpHarmoniaOtServerKeywordPage />;
}
