import TopTibianusHighscoresKeywordPage, { generateMetadata } from './top-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusHighscoresKeywordPage />;
}
