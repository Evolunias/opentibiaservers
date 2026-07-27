import OriginaltibiaLaunchKeywordPage, { generateMetadata } from './originaltibia-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaLaunchKeywordPage />;
}
