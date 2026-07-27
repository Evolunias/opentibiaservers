import NewMediviaHighscoresKeywordPage, { generateMetadata } from './new-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMediviaHighscoresKeywordPage />;
}
