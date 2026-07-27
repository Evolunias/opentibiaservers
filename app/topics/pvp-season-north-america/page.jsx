import PvpSeasonNorthAmericaKeywordPage, { generateMetadata } from './pvp-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonNorthAmericaKeywordPage />;
}
