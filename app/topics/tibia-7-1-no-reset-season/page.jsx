import Tibia71NoResetSeasonKeywordPage, { generateMetadata } from './tibia-7-1-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NoResetSeasonKeywordPage />;
}
