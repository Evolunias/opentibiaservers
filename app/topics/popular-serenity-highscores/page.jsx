import PopularSerenityHighscoresKeywordPage, { generateMetadata } from './popular-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityHighscoresKeywordPage />;
}
