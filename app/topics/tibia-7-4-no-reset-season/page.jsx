import Tibia74NoResetSeasonKeywordPage, { generateMetadata } from './tibia-7-4-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NoResetSeasonKeywordPage />;
}
