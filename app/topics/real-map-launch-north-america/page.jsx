import RealMapLaunchNorthAmericaKeywordPage, { generateMetadata } from './real-map-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchNorthAmericaKeywordPage />;
}
