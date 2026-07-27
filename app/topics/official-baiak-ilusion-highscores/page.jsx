import OfficialBaiakIlusionHighscoresKeywordPage, { generateMetadata } from './official-baiak-ilusion-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBaiakIlusionHighscoresKeywordPage />;
}
