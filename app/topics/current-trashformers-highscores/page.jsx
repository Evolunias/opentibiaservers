import CurrentTrashformersHighscoresKeywordPage, { generateMetadata } from './current-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersHighscoresKeywordPage />;
}
