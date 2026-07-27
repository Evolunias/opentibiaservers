import Tibia11LowExpLaunchKeywordPage, { generateMetadata } from './tibia-11-low-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpLaunchKeywordPage />;
}
