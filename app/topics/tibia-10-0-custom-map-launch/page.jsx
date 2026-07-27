import Tibia100CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapLaunchKeywordPage />;
}
