import BaiakLaunchUkKeywordPage, { generateMetadata } from './baiak-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchUkKeywordPage />;
}
