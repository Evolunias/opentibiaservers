import NonPvpSeasonUsaKeywordPage, { generateMetadata } from './non-pvp-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonUsaKeywordPage />;
}
