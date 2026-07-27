import NoxiousotHighscoresKeywordPage, { generateMetadata } from './noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotHighscoresKeywordPage />;
}
