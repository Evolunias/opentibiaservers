import OfficialOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './official-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOriginaltibiaHighscoresKeywordPage />;
}
