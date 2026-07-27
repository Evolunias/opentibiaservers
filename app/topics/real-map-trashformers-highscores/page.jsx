import RealMapTrashformersHighscoresKeywordPage, { generateMetadata } from './real-map-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersHighscoresKeywordPage />;
}
