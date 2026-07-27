import Tibia12LowExpSeasonKeywordPage, { generateMetadata } from './tibia-12-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpSeasonKeywordPage />;
}
