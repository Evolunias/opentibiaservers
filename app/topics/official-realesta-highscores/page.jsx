import OfficialRealestaHighscoresKeywordPage, { generateMetadata } from './official-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaHighscoresKeywordPage />;
}
