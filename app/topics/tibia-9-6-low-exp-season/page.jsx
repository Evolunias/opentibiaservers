import Tibia96LowExpSeasonKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpSeasonKeywordPage />;
}
