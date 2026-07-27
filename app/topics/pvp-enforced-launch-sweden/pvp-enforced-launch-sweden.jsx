import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-launch-sweden');
}

export default function PvpEnforcedLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-launch-sweden" />;
}
