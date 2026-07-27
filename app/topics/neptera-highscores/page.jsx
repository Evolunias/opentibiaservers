import NepteraHighscoresKeywordPage, { generateMetadata } from './neptera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraHighscoresKeywordPage />;
}
