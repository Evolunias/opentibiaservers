import HarmoniaOt15RetroServerKeywordPage, { generateMetadata } from './harmonia-ot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15RetroServerKeywordPage />;
}
