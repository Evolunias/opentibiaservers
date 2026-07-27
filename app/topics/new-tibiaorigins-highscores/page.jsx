import NewTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './new-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsHighscoresKeywordPage />;
}
