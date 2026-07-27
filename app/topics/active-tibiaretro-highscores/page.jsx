import ActiveTibiaretroHighscoresKeywordPage, { generateMetadata } from './active-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroHighscoresKeywordPage />;
}
