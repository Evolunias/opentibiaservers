import Tibia86CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapLaunchKeywordPage />;
}
