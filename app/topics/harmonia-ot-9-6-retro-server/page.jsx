import HarmoniaOt96RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt96RetroServerKeywordPage />;
}
