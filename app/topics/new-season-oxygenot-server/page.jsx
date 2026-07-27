import NewSeasonOxygenotServerKeywordPage, { generateMetadata } from './new-season-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotServerKeywordPage />;
}
