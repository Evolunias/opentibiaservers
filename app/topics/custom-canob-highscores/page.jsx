import CustomCanobHighscoresKeywordPage, { generateMetadata } from './custom-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobHighscoresKeywordPage />;
}
