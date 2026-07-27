import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-south-america');
}

export default function RetroLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-south-america" />;
}
