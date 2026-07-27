import CustomMidhemHighscoresKeywordPage, { generateMetadata } from './custom-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemHighscoresKeywordPage />;
}
