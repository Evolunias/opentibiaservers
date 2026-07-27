import NonPvpOtServerSeasonKeywordPage, { generateMetadata } from './non-pvp-ot-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerSeasonKeywordPage />;
}
