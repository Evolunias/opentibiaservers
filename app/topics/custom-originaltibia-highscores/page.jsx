import CustomOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './custom-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaHighscoresKeywordPage />;
}
