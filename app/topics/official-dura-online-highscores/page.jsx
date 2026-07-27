import OfficialDuraOnlineHighscoresKeywordPage, { generateMetadata } from './official-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineHighscoresKeywordPage />;
}
