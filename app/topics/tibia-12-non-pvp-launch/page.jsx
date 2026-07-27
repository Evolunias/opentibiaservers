import Tibia12NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-12-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpLaunchKeywordPage />;
}
