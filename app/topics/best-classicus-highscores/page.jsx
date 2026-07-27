import BestClassicusHighscoresKeywordPage, { generateMetadata } from './best-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusHighscoresKeywordPage />;
}
