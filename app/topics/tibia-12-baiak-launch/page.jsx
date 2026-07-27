import Tibia12BaiakLaunchKeywordPage, { generateMetadata } from './tibia-12-baiak-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakLaunchKeywordPage />;
}
