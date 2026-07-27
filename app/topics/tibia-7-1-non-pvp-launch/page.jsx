import Tibia71NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpLaunchKeywordPage />;
}
