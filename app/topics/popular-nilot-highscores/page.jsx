import PopularNilotHighscoresKeywordPage, { generateMetadata } from './popular-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotHighscoresKeywordPage />;
}
