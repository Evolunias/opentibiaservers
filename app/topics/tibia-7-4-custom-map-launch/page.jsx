import Tibia74CustomMapLaunchKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapLaunchKeywordPage />;
}
