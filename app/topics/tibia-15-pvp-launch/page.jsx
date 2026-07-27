import Tibia15PvpLaunchKeywordPage, { generateMetadata } from './tibia-15-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpLaunchKeywordPage />;
}
