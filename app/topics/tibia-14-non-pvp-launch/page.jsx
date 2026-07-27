import Tibia14NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-14-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpLaunchKeywordPage />;
}
