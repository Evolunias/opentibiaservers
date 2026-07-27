import OxygenotEvoServerLatinAmericaKeywordPage, { generateMetadata } from './oxygenot-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEvoServerLatinAmericaKeywordPage />;
}
