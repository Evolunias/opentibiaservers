import OxygenotHighscoresKeywordPage, { generateMetadata } from './oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotHighscoresKeywordPage />;
}
