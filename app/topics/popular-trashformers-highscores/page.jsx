import PopularTrashformersHighscoresKeywordPage, { generateMetadata } from './popular-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersHighscoresKeywordPage />;
}
