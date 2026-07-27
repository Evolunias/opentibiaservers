import HarmoniaOt14EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14EvoServerKeywordPage />;
}
