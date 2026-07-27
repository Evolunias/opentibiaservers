import CustomTibiascapeHighscoresKeywordPage, { generateMetadata } from './custom-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeHighscoresKeywordPage />;
}
