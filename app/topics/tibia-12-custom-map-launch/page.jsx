import Tibia12CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-12-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapLaunchKeywordPage />;
}
