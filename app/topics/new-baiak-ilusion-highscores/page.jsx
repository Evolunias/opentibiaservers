import NewBaiakIlusionHighscoresKeywordPage, { generateMetadata } from './new-baiak-ilusion-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBaiakIlusionHighscoresKeywordPage />;
}
