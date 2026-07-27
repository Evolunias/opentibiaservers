import PvpLaunchArgentinaKeywordPage, { generateMetadata } from './pvp-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchArgentinaKeywordPage />;
}
