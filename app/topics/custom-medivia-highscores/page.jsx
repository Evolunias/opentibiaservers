import CustomMediviaHighscoresKeywordPage, { generateMetadata } from './custom-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaHighscoresKeywordPage />;
}
