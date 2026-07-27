import TopAmeriaHighscoresKeywordPage, { generateMetadata } from './top-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaHighscoresKeywordPage />;
}
