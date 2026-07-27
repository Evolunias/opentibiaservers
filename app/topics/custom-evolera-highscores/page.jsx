import CustomEvoleraHighscoresKeywordPage, { generateMetadata } from './custom-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraHighscoresKeywordPage />;
}
