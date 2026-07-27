import OfficialZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './official-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineHighscoresKeywordPage />;
}
