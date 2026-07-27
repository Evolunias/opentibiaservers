import TopOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './top-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOriginaltibiaHighscoresKeywordPage />;
}
