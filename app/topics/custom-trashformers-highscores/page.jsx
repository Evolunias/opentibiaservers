import CustomTrashformersHighscoresKeywordPage, { generateMetadata } from './custom-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersHighscoresKeywordPage />;
}
