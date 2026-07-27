import CustomThorniaHighscoresKeywordPage, { generateMetadata } from './custom-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaHighscoresKeywordPage />;
}
