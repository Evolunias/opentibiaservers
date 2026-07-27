import EvoCalmeraOtServerKeywordPage, { generateMetadata } from './evo-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCalmeraOtServerKeywordPage />;
}
