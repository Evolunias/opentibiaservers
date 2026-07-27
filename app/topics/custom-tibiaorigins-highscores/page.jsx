import CustomTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './custom-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsHighscoresKeywordPage />;
}
