import Tibia14LowExpLaunchKeywordPage, { generateMetadata } from './tibia-14-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpLaunchKeywordPage />;
}
