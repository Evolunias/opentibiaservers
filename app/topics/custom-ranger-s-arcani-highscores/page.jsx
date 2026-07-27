import CustomRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniHighscoresKeywordPage />;
}
