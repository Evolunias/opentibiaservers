import Tibia81LowExpSeasonKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpSeasonKeywordPage />;
}
