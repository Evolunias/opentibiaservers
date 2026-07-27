import TopSerenityHighscoresKeywordPage, { generateMetadata } from './top-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityHighscoresKeywordPage />;
}
