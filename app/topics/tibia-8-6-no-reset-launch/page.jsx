import Tibia86NoResetLaunchKeywordPage, { generateMetadata } from './tibia-8-6-no-reset-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NoResetLaunchKeywordPage />;
}
