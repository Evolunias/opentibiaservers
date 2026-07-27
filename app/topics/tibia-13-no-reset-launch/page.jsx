import Tibia13NoResetLaunchKeywordPage, { generateMetadata } from './tibia-13-no-reset-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetLaunchKeywordPage />;
}
