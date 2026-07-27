import Tibia96CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapLaunchKeywordPage />;
}
