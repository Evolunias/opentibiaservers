import CustomInfernalOtHighscoresKeywordPage, { generateMetadata } from './custom-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtHighscoresKeywordPage />;
}
