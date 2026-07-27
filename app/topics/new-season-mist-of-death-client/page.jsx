import NewSeasonMistOfDeathClientKeywordPage, { generateMetadata } from './new-season-mist-of-death-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathClientKeywordPage />;
}
