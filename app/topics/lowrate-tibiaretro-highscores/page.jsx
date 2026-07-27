import LowrateTibiaretroHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroHighscoresKeywordPage />;
}
