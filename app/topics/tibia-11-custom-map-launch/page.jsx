import Tibia11CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-11-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapLaunchKeywordPage />;
}
