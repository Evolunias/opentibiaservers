import LowrateTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsHighscoresKeywordPage />;
}
