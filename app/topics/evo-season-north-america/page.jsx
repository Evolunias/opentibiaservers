import EvoSeasonNorthAmericaKeywordPage, { generateMetadata } from './evo-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonNorthAmericaKeywordPage />;
}
