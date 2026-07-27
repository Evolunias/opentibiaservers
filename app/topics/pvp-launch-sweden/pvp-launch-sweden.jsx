import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-launch-sweden');
}

export default function PvpLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-launch-sweden" />;
}
