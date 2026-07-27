import OfficialNoxiousotHighscoresKeywordPage, { generateMetadata } from './official-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotHighscoresKeywordPage />;
}
