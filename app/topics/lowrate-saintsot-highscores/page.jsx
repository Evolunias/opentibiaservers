import LowrateSaintsotHighscoresKeywordPage, { generateMetadata } from './lowrate-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotHighscoresKeywordPage />;
}
