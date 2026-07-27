import ActiveBaiakIlusionHighscoresKeywordPage, { generateMetadata } from './active-baiak-ilusion-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBaiakIlusionHighscoresKeywordPage />;
}
