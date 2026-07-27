import SabrehavenEvoServerLatinAmericaKeywordPage, { generateMetadata } from './sabrehaven-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenEvoServerLatinAmericaKeywordPage />;
}
