import Tibia80HighExpLaunchKeywordPage, { generateMetadata } from './tibia-8-0-high-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80HighExpLaunchKeywordPage />;
}
