import Tibia15NoResetLaunchKeywordPage, { generateMetadata } from './tibia-15-no-reset-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetLaunchKeywordPage />;
}
