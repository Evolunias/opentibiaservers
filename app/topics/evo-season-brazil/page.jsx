import EvoSeasonBrazilKeywordPage, { generateMetadata } from './evo-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonBrazilKeywordPage />;
}
