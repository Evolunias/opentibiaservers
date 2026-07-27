import OpenTibiaServersLaunchKeywordPage, { generateMetadata } from './open-tibia-servers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersLaunchKeywordPage />;
}
