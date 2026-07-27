import CustomThaisotHighscoresKeywordPage, { generateMetadata } from './custom-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotHighscoresKeywordPage />;
}
