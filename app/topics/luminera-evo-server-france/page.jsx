import LumineraEvoServerFranceKeywordPage, { generateMetadata } from './luminera-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraEvoServerFranceKeywordPage />;
}
