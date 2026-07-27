import ActiveTibiameHighscoresKeywordPage, { generateMetadata } from './active-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameHighscoresKeywordPage />;
}
