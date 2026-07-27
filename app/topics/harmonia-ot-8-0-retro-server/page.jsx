import HarmoniaOt80RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80RetroServerKeywordPage />;
}
