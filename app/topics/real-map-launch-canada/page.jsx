import RealMapLaunchCanadaKeywordPage, { generateMetadata } from './real-map-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchCanadaKeywordPage />;
}
