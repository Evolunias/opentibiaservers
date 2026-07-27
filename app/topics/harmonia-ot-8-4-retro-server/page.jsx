import HarmoniaOt84RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt84RetroServerKeywordPage />;
}
