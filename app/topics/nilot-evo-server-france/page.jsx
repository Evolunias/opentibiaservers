import NilotEvoServerFranceKeywordPage, { generateMetadata } from './nilot-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotEvoServerFranceKeywordPage />;
}
