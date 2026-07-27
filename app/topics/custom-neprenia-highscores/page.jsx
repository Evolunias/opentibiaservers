import CustomNepreniaHighscoresKeywordPage, { generateMetadata } from './custom-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaHighscoresKeywordPage />;
}
