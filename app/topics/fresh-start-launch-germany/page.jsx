import FreshStartLaunchGermanyKeywordPage, { generateMetadata } from './fresh-start-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchGermanyKeywordPage />;
}
