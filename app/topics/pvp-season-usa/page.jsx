import PvpSeasonUsaKeywordPage, { generateMetadata } from './pvp-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonUsaKeywordPage />;
}
