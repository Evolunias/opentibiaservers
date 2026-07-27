import HarmoniaOt12RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12RetroServerKeywordPage />;
}
