import Tibia86ServerLaunchKeywordPage, { generateMetadata } from './tibia-8-6-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerLaunchKeywordPage />;
}
