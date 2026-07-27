import Tibia86LowExpSeasonKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpSeasonKeywordPage />;
}
