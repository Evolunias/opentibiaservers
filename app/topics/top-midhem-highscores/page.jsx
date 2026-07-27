import TopMidhemHighscoresKeywordPage, { generateMetadata } from './top-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemHighscoresKeywordPage />;
}
