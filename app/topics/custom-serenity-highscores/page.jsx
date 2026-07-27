import CustomSerenityHighscoresKeywordPage, { generateMetadata } from './custom-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityHighscoresKeywordPage />;
}
