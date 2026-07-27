import Tibia100LowExpSeasonKeywordPage, { generateMetadata } from './tibia-10-0-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100LowExpSeasonKeywordPage />;
}
