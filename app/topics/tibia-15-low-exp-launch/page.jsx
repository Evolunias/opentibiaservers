import Tibia15LowExpLaunchKeywordPage, { generateMetadata } from './tibia-15-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpLaunchKeywordPage />;
}
