import Tibia96LowExpLaunchKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpLaunchKeywordPage />;
}
