import Tibia14EvoLaunchKeywordPage, { generateMetadata } from './tibia-14-evo-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoLaunchKeywordPage />;
}
