import EvoLaunchSouthAmericaKeywordPage, { generateMetadata } from './evo-launch-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchSouthAmericaKeywordPage />;
}
