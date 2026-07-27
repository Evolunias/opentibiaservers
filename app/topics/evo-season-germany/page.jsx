import EvoSeasonGermanyKeywordPage, { generateMetadata } from './evo-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonGermanyKeywordPage />;
}
