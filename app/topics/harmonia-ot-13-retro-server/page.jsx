import HarmoniaOt13RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13RetroServerKeywordPage />;
}
