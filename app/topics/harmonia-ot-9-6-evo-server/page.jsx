import HarmoniaOt96EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt96EvoServerKeywordPage />;
}
