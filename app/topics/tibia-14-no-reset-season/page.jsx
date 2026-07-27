import Tibia14NoResetSeasonKeywordPage, { generateMetadata } from './tibia-14-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetSeasonKeywordPage />;
}
