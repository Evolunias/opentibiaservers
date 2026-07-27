import NilotEvoServerUkKeywordPage, { generateMetadata } from './nilot-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEvoServerUkKeywordPage />;
}
