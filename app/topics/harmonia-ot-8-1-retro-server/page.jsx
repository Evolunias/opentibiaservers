import HarmoniaOt81RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt81RetroServerKeywordPage />;
}
