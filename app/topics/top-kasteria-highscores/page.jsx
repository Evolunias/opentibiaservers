import TopKasteriaHighscoresKeywordPage, { generateMetadata } from './top-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaHighscoresKeywordPage />;
}
