import CustomLumineraHighscoresKeywordPage, { generateMetadata } from './custom-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraHighscoresKeywordPage />;
}
