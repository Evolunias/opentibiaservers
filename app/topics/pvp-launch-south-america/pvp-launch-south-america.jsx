import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-south-america');
}

export default function PvpLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-south-america" />;
}
