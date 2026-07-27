import Tibia80LowExpSeasonKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpSeasonKeywordPage />;
}
