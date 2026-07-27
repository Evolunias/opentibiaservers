import Tibia13ServerSeasonKeywordPage, { generateMetadata } from './tibia-13-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerSeasonKeywordPage />;
}
