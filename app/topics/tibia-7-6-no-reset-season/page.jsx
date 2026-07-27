import Tibia76NoResetSeasonKeywordPage, { generateMetadata } from './tibia-7-6-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NoResetSeasonKeywordPage />;
}
