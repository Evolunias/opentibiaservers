import CustomMiracleHighscoresKeywordPage, { generateMetadata } from './custom-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleHighscoresKeywordPage />;
}
