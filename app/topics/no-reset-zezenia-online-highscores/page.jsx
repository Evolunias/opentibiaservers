import NoResetZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './no-reset-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetZezeniaOnlineHighscoresKeywordPage />;
}
