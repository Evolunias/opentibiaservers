import NoResetTibiaretroHighscoresKeywordPage, { generateMetadata } from './no-reset-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaretroHighscoresKeywordPage />;
}
