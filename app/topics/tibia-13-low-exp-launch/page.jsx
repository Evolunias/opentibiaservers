import Tibia13LowExpLaunchKeywordPage, { generateMetadata } from './tibia-13-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpLaunchKeywordPage />;
}
