import NonPvpSeasonPolandKeywordPage, { generateMetadata } from './non-pvp-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonPolandKeywordPage />;
}
