import Tibia13CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-13-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapLaunchKeywordPage />;
}
