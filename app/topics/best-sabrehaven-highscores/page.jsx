import BestSabrehavenHighscoresKeywordPage, { generateMetadata } from './best-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenHighscoresKeywordPage />;
}
