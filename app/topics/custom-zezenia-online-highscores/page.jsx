import CustomZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './custom-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineHighscoresKeywordPage />;
}
