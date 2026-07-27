import Tibia11EvoLaunchKeywordPage, { generateMetadata } from './tibia-11-evo-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoLaunchKeywordPage />;
}
