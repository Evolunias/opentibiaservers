import BaiakLaunchCanadaKeywordPage, { generateMetadata } from './baiak-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchCanadaKeywordPage />;
}
