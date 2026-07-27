import PvpeLaunchGermanyKeywordPage, { generateMetadata } from './pvpe-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchGermanyKeywordPage />;
}
