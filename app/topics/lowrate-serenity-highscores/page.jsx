import LowrateSerenityHighscoresKeywordPage, { generateMetadata } from './lowrate-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityHighscoresKeywordPage />;
}
