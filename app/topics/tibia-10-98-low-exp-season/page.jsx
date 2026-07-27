import Tibia1098LowExpSeasonKeywordPage, { generateMetadata } from './tibia-10-98-low-exp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098LowExpSeasonKeywordPage />;
}
