import OfficialYurotsHighscoresKeywordPage, { generateMetadata } from './official-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsHighscoresKeywordPage />;
}
