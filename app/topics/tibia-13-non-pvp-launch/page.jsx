import Tibia13NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-13-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpLaunchKeywordPage />;
}
