import HarmoniaOt84EvoServerKeywordPage, { generateMetadata } from './harmonia-ot-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt84EvoServerKeywordPage />;
}
