import TopTrashformersHighscoresKeywordPage, { generateMetadata } from './top-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersHighscoresKeywordPage />;
}
