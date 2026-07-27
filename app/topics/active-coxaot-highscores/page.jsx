import ActiveCoxaotHighscoresKeywordPage, { generateMetadata } from './active-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotHighscoresKeywordPage />;
}
