import HarmoniaOt14RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14RetroServerKeywordPage />;
}
