import Tibia96NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpLaunchKeywordPage />;
}
