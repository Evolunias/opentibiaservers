import HighrateTibiaretroHighscoresKeywordPage, { generateMetadata } from './highrate-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroHighscoresKeywordPage />;
}
