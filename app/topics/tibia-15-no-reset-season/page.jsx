import Tibia15NoResetSeasonKeywordPage, { generateMetadata } from './tibia-15-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetSeasonKeywordPage />;
}
