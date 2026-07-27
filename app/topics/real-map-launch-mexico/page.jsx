import RealMapLaunchMexicoKeywordPage, { generateMetadata } from './real-map-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchMexicoKeywordPage />;
}
