import NonPvpSeasonUkKeywordPage, { generateMetadata } from './non-pvp-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonUkKeywordPage />;
}
