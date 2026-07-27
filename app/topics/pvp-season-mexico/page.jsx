import PvpSeasonMexicoKeywordPage, { generateMetadata } from './pvp-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonMexicoKeywordPage />;
}
