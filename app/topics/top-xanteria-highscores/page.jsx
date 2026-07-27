import TopXanteriaHighscoresKeywordPage, { generateMetadata } from './top-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaHighscoresKeywordPage />;
}
