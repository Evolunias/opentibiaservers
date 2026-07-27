import CustomTibianusHighscoresKeywordPage, { generateMetadata } from './custom-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusHighscoresKeywordPage />;
}
