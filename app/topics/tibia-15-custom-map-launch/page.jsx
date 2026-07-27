import Tibia15CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-15-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapLaunchKeywordPage />;
}
