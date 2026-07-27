import Tibia12LowExpLaunchKeywordPage, { generateMetadata } from './tibia-12-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpLaunchKeywordPage />;
}
