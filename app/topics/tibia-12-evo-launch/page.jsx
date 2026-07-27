import Tibia12EvoLaunchKeywordPage, { generateMetadata } from './tibia-12-evo-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoLaunchKeywordPage />;
}
