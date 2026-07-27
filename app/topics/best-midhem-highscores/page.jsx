import BestMidhemHighscoresKeywordPage, { generateMetadata } from './best-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemHighscoresKeywordPage />;
}
