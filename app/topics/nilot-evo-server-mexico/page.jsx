import NilotEvoServerMexicoKeywordPage, { generateMetadata } from './nilot-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEvoServerMexicoKeywordPage />;
}
