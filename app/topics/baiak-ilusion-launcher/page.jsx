import BaiakIlusionLauncherKeywordPage, { generateMetadata } from './baiak-ilusion-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionLauncherKeywordPage />;
}
