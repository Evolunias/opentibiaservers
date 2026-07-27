import Tibia15EvoLaunchKeywordPage, { generateMetadata } from './tibia-15-evo-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoLaunchKeywordPage />;
}
