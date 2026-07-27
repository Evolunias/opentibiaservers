import SeasonalLaunchArgentinaKeywordPage, { generateMetadata } from './seasonal-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchArgentinaKeywordPage />;
}
