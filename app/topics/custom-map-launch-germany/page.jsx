import CustomMapLaunchGermanyKeywordPage, { generateMetadata } from './custom-map-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchGermanyKeywordPage />;
}
