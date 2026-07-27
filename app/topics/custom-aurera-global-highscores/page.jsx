import CustomAureraGlobalHighscoresKeywordPage, { generateMetadata } from './custom-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalHighscoresKeywordPage />;
}
