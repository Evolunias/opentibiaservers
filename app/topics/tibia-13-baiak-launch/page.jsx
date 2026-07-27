import Tibia13BaiakLaunchKeywordPage, { generateMetadata } from './tibia-13-baiak-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakLaunchKeywordPage />;
}
