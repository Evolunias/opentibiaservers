import NoResetSaintsotHighscoresKeywordPage, { generateMetadata } from './no-reset-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotHighscoresKeywordPage />;
}
