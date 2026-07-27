import HarmoniaOt80EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt80EvoServerKeywordPage />;
}
