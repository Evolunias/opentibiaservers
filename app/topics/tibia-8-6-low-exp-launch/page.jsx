import Tibia86LowExpLaunchKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpLaunchKeywordPage />;
}
