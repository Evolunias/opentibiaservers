import NewSeasonTrashformersHighscoresKeywordPage, { generateMetadata } from './new-season-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersHighscoresKeywordPage />;
}
