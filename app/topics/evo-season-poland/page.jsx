import EvoSeasonPolandKeywordPage, { generateMetadata } from './evo-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonPolandKeywordPage />;
}
