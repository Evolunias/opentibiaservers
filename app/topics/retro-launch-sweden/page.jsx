import RetroLaunchSwedenKeywordPage, { generateMetadata } from './retro-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLaunchSwedenKeywordPage />;
}
