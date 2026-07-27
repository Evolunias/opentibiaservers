import Tibia86ServerSeasonKeywordPage, { generateMetadata } from './tibia-8-6-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerSeasonKeywordPage />;
}
