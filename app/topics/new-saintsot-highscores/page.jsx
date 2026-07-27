import NewSaintsotHighscoresKeywordPage, { generateMetadata } from './new-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotHighscoresKeywordPage />;
}
