import Tibia11BaiakLaunchKeywordPage, { generateMetadata } from './tibia-11-baiak-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakLaunchKeywordPage />;
}
