import EvoOtServerMexicoKeywordPage, { generateMetadata } from './evo-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerMexicoKeywordPage />;
}
