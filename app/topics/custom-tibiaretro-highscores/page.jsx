import CustomTibiaretroHighscoresKeywordPage, { generateMetadata } from './custom-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroHighscoresKeywordPage />;
}
