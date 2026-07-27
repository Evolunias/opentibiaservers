import Tibia84LowExpSeasonKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpSeasonKeywordPage />;
}
