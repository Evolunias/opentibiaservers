import Tibia84NoResetSeasonKeywordPage, { generateMetadata } from './tibia-8-4-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NoResetSeasonKeywordPage />;
}
