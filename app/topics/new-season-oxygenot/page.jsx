import NewSeasonOxygenotKeywordPage, { generateMetadata } from './new-season-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotKeywordPage />;
}
