import EvoCalmeraOtServersKeywordPage, { generateMetadata } from './evo-calmera-ot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCalmeraOtServersKeywordPage />;
}
