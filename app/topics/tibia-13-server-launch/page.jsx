import Tibia13ServerLaunchKeywordPage, { generateMetadata } from './tibia-13-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerLaunchKeywordPage />;
}
