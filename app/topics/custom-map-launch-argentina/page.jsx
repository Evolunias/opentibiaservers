import CustomMapLaunchArgentinaKeywordPage, { generateMetadata } from './custom-map-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchArgentinaKeywordPage />;
}
