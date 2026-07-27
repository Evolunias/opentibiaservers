import ActiveTibijkaHighscoresKeywordPage, { generateMetadata } from './active-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaHighscoresKeywordPage />;
}
