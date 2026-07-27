import CustomYurotsHighscoresKeywordPage, { generateMetadata } from './custom-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsHighscoresKeywordPage />;
}
