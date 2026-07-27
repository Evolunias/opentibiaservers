import HarmoniaOt11RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11RetroServerKeywordPage />;
}
