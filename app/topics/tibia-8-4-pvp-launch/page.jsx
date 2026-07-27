import Tibia84PvpLaunchKeywordPage, { generateMetadata } from './tibia-8-4-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpLaunchKeywordPage />;
}
