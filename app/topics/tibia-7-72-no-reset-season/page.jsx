import Tibia772NoResetSeasonKeywordPage, { generateMetadata } from './tibia-7-72-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NoResetSeasonKeywordPage />;
}
