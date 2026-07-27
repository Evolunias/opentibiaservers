import TibijkaHighscoresKeywordPage, { generateMetadata } from './tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaHighscoresKeywordPage />;
}
