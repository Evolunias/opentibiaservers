import CustomNtoStarHighscoresKeywordPage, { generateMetadata } from './custom-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarHighscoresKeywordPage />;
}
