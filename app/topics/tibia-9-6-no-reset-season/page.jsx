import Tibia96NoResetSeasonKeywordPage, { generateMetadata } from './tibia-9-6-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NoResetSeasonKeywordPage />;
}
