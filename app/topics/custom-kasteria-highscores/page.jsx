import CustomKasteriaHighscoresKeywordPage, { generateMetadata } from './custom-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaHighscoresKeywordPage />;
}
