import NilotEvoServerArgentinaKeywordPage, { generateMetadata } from './nilot-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEvoServerArgentinaKeywordPage />;
}
