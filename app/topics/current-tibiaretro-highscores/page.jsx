import CurrentTibiaretroHighscoresKeywordPage, { generateMetadata } from './current-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroHighscoresKeywordPage />;
}
