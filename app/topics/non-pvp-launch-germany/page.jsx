import NonPvpLaunchGermanyKeywordPage, { generateMetadata } from './non-pvp-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchGermanyKeywordPage />;
}
