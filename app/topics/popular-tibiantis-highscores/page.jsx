import PopularTibiantisHighscoresKeywordPage, { generateMetadata } from './popular-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisHighscoresKeywordPage />;
}
