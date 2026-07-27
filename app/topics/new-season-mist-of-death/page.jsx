import NewSeasonMistOfDeathKeywordPage, { generateMetadata } from './new-season-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMistOfDeathKeywordPage />;
}
