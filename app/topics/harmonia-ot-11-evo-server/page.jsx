import HarmoniaOt11EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11EvoServerKeywordPage />;
}
