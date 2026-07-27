import NewTibiaretroHighscoresKeywordPage, { generateMetadata } from './new-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroHighscoresKeywordPage />;
}
