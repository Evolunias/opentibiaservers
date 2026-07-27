import Tibia86NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpLaunchKeywordPage />;
}
