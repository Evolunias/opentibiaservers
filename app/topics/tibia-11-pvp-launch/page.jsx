import Tibia11PvpLaunchKeywordPage, { generateMetadata } from './tibia-11-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpLaunchKeywordPage />;
}
