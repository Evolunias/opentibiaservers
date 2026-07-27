import ActiveTrashformersHighscoresKeywordPage, { generateMetadata } from './active-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersHighscoresKeywordPage />;
}
