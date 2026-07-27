import CustomTibiameHighscoresKeywordPage, { generateMetadata } from './custom-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiameHighscoresKeywordPage />;
}
