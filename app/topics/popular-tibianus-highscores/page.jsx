import PopularTibianusHighscoresKeywordPage, { generateMetadata } from './popular-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusHighscoresKeywordPage />;
}
