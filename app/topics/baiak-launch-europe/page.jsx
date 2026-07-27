import BaiakLaunchEuropeKeywordPage, { generateMetadata } from './baiak-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchEuropeKeywordPage />;
}
