import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-sweden');
}

export default function EvoLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-sweden" />;
}
