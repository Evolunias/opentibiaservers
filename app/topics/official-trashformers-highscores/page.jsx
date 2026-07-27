import OfficialTrashformersHighscoresKeywordPage, { generateMetadata } from './official-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersHighscoresKeywordPage />;
}
