import RealMapLaunchUsaKeywordPage, { generateMetadata } from './real-map-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchUsaKeywordPage />;
}
