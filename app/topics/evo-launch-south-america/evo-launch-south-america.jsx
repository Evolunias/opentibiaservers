import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-south-america');
}

export default function EvoLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-south-america" />;
}
