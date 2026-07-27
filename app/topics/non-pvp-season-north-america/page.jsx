import NonPvpSeasonNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonNorthAmericaKeywordPage />;
}
