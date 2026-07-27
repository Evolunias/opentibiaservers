import InfernalOtHighscoresKeywordPage, { generateMetadata } from './infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtHighscoresKeywordPage />;
}
