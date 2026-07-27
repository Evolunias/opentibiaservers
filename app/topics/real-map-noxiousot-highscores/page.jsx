import RealMapNoxiousotHighscoresKeywordPage, { generateMetadata } from './real-map-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNoxiousotHighscoresKeywordPage />;
}
