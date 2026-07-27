import PopularTibiascapeHighscoresKeywordPage, { generateMetadata } from './popular-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeHighscoresKeywordPage />;
}
