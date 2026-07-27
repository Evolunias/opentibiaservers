import OfficialCoxaotHighscoresKeywordPage, { generateMetadata } from './official-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotHighscoresKeywordPage />;
}
