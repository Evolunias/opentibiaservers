import Tibia12NoResetSeasonKeywordPage, { generateMetadata } from './tibia-12-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetSeasonKeywordPage />;
}
