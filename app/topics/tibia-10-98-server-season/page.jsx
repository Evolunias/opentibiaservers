import Tibia1098ServerSeasonKeywordPage, { generateMetadata } from './tibia-10-98-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerSeasonKeywordPage />;
}
