import PopularTibiaretroHighscoresKeywordPage, { generateMetadata } from './popular-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroHighscoresKeywordPage />;
}
