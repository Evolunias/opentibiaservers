import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-sweden');
}

export default function FreshStartLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-sweden" />;
}
