import CustomUnlineHighscoresKeywordPage, { generateMetadata } from './custom-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineHighscoresKeywordPage />;
}
