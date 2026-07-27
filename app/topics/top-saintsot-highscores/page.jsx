import TopSaintsotHighscoresKeywordPage, { generateMetadata } from './top-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotHighscoresKeywordPage />;
}
