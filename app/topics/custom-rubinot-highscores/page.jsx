import CustomRubinotHighscoresKeywordPage, { generateMetadata } from './custom-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotHighscoresKeywordPage />;
}
