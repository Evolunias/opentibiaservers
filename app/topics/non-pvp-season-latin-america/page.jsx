import NonPvpSeasonLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonLatinAmericaKeywordPage />;
}
