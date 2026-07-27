import Tibia12NoResetLaunchKeywordPage, { generateMetadata } from './tibia-12-no-reset-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetLaunchKeywordPage />;
}
