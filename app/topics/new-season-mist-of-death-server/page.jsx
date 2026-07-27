import NewSeasonMistOfDeathServerKeywordPage, { generateMetadata } from './new-season-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathServerKeywordPage />;
}
