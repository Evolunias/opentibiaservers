import EvoServersMexicoKeywordPage, { generateMetadata } from './evo-servers-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersMexicoKeywordPage />;
}
