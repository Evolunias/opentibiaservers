import PopularSaintsotHighscoresKeywordPage, { generateMetadata } from './popular-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotHighscoresKeywordPage />;
}
