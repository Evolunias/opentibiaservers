import PvpeHarmoniaOtServerKeywordPage, { generateMetadata } from './pvpe-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeHarmoniaOtServerKeywordPage />;
}
