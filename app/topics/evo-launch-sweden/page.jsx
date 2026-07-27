import EvoLaunchSwedenKeywordPage, { generateMetadata } from './evo-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchSwedenKeywordPage />;
}
