import Tibia81NoResetSeasonKeywordPage, { generateMetadata } from './tibia-8-1-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NoResetSeasonKeywordPage />;
}
