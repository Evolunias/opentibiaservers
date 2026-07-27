import Tibia13NoResetSeasonKeywordPage, { generateMetadata } from './tibia-13-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetSeasonKeywordPage />;
}
