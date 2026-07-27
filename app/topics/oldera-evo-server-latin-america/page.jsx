import OlderaEvoServerLatinAmericaKeywordPage, { generateMetadata } from './oldera-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaEvoServerLatinAmericaKeywordPage />;
}
