import OpenTibiaServerListLaunchKeywordPage, { generateMetadata } from './open-tibia-server-list-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListLaunchKeywordPage />;
}
