import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-south-america');
}

export default function NonPvpLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-south-america" />;
}
