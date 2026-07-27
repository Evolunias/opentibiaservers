import EvoOtServerUkKeywordPage, { generateMetadata } from './evo-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerUkKeywordPage />;
}
