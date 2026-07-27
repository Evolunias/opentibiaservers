import EvoSeasonUkKeywordPage, { generateMetadata } from './evo-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonUkKeywordPage />;
}
