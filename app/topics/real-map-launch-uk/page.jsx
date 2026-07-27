import RealMapLaunchUkKeywordPage, { generateMetadata } from './real-map-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchUkKeywordPage />;
}
