import Tibia14LowExpSeasonKeywordPage, { generateMetadata } from './tibia-14-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpSeasonKeywordPage />;
}
