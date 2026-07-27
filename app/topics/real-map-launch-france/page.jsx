import RealMapLaunchFranceKeywordPage, { generateMetadata } from './real-map-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchFranceKeywordPage />;
}
