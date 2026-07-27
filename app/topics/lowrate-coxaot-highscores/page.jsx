import LowrateCoxaotHighscoresKeywordPage, { generateMetadata } from './lowrate-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotHighscoresKeywordPage />;
}
