import HarmoniaOt15EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15EvoServerKeywordPage />;
}
