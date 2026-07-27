import Tibia81LowExpLaunchKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpLaunchKeywordPage />;
}
