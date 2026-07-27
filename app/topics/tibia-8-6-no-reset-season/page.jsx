import Tibia86NoResetSeasonKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetSeasonKeywordPage />;
}
