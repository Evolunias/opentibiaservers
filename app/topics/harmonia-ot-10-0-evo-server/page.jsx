import HarmoniaOt100EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100EvoServerKeywordPage />;
}
