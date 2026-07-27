import Tibia80LowExpLaunchKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpLaunchKeywordPage />;
}
