import CustomCoxaotHighscoresKeywordPage, { generateMetadata } from './custom-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotHighscoresKeywordPage />;
}
