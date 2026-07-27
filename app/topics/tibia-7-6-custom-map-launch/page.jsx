import Tibia76CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapLaunchKeywordPage />;
}
