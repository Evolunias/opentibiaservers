import NoResetArchlightHighscoresKeywordPage, { generateMetadata } from './no-reset-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightHighscoresKeywordPage />;
}
