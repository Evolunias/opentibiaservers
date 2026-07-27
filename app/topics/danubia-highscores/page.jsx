import DanubiaHighscoresKeywordPage, { generateMetadata } from './danubia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaHighscoresKeywordPage />;
}
