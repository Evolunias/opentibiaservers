import NoResetAlasteraHighscoresKeywordPage, { generateMetadata } from './no-reset-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraHighscoresKeywordPage />;
}
