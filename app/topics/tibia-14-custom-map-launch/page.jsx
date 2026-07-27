import Tibia14CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-14-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapLaunchKeywordPage />;
}
