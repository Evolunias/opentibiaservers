import PopularThorniaHighscoresKeywordPage, { generateMetadata } from './popular-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaHighscoresKeywordPage />;
}
