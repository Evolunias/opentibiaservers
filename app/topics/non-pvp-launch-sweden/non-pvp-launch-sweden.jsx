import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-launch-sweden');
}

export default function NonPvpLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-launch-sweden" />;
}
