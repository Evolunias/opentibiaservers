import Tibia15BaiakLaunchKeywordPage, { generateMetadata } from './tibia-15-baiak-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakLaunchKeywordPage />;
}
