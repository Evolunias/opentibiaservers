import Tibia100NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpLaunchKeywordPage />;
}
