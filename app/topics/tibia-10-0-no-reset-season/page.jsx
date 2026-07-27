import Tibia100NoResetSeasonKeywordPage, { generateMetadata } from './tibia-10-0-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NoResetSeasonKeywordPage />;
}
