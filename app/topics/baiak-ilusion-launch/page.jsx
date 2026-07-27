import BaiakIlusionLaunchKeywordPage, { generateMetadata } from './baiak-ilusion-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionLaunchKeywordPage />;
}
