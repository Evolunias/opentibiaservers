import HighrateTrashformersHighscoresKeywordPage, { generateMetadata } from './highrate-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersHighscoresKeywordPage />;
}
