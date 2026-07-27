import CustomMapLaunchNorthAmericaKeywordPage, { generateMetadata } from './custom-map-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchNorthAmericaKeywordPage />;
}
