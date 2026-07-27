import OldSchoolTrashformersHighscoresKeywordPage, { generateMetadata } from './old-school-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersHighscoresKeywordPage />;
}
