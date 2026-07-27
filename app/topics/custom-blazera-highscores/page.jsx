import CustomBlazeraHighscoresKeywordPage, { generateMetadata } from './custom-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraHighscoresKeywordPage />;
}
