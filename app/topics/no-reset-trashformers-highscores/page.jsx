import NoResetTrashformersHighscoresKeywordPage, { generateMetadata } from './no-reset-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTrashformersHighscoresKeywordPage />;
}
