import TopSabrehavenHighscoresKeywordPage, { generateMetadata } from './top-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenHighscoresKeywordPage />;
}
