import BestDemolidoresHighscoresKeywordPage, { generateMetadata } from './best-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresHighscoresKeywordPage />;
}
