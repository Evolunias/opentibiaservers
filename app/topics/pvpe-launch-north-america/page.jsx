import PvpeLaunchNorthAmericaKeywordPage, { generateMetadata } from './pvpe-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchNorthAmericaKeywordPage />;
}
