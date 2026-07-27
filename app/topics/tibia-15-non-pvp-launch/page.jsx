import Tibia15NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-15-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpLaunchKeywordPage />;
}
