import EvoOtServerCanadaKeywordPage, { generateMetadata } from './evo-ot-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerCanadaKeywordPage />;
}
