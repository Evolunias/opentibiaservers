import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-south-america');
}

export default function PvpEnforcedLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-south-america" />;
}
