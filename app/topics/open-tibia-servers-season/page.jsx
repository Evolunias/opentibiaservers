import OpenTibiaServersSeasonKeywordPage, { generateMetadata } from './open-tibia-servers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersSeasonKeywordPage />;
}
