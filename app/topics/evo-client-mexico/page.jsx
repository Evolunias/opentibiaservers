import EvoClientMexicoKeywordPage, { generateMetadata } from './evo-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientMexicoKeywordPage />;
}
