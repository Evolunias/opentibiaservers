import Tibia11NonPvpLaunchKeywordPage, { generateMetadata } from './tibia-11-non-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpLaunchKeywordPage />;
}
