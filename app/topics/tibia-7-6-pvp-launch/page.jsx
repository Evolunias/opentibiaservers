import Tibia76PvpLaunchKeywordPage, { generateMetadata } from './tibia-7-6-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpLaunchKeywordPage />;
}
