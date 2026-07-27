import Tibia71LowExpSeasonKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpSeasonKeywordPage />;
}
