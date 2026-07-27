import EvoHarmoniaOtServerKeywordPage, { generateMetadata } from './evo-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoHarmoniaOtServerKeywordPage />;
}
