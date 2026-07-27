import MidhemEvoServerFranceKeywordPage, { generateMetadata } from './midhem-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemEvoServerFranceKeywordPage />;
}
