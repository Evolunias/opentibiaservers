import BaiakLaunchGermanyKeywordPage, { generateMetadata } from './baiak-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchGermanyKeywordPage />;
}
