import NonPvpLaunchArgentinaKeywordPage, { generateMetadata } from './non-pvp-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchArgentinaKeywordPage />;
}
