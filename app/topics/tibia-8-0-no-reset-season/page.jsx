import Tibia80NoResetSeasonKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetSeasonKeywordPage />;
}
