import EvoSeasonLatinAmericaKeywordPage, { generateMetadata } from './evo-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonLatinAmericaKeywordPage />;
}
