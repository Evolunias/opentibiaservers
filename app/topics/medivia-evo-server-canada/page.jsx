import MediviaEvoServerCanadaKeywordPage, { generateMetadata } from './medivia-evo-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaEvoServerCanadaKeywordPage />;
}
