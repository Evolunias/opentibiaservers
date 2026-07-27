import EvoHarmoniaOtServersKeywordPage, { generateMetadata } from './evo-harmonia-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoHarmoniaOtServersKeywordPage />;
}
