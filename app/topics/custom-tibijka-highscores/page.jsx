import CustomTibijkaHighscoresKeywordPage, { generateMetadata } from './custom-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaHighscoresKeywordPage />;
}
