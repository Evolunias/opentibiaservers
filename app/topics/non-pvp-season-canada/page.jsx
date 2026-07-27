import NonPvpSeasonCanadaKeywordPage, { generateMetadata } from './non-pvp-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonCanadaKeywordPage />;
}
