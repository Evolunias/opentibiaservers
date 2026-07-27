import Tibia80BaiakLaunchKeywordPage, { generateMetadata } from './tibia-8-0-baiak-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakLaunchKeywordPage />;
}
