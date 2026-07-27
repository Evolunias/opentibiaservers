import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-sweden');
}

export default function BaiakLaunchSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-sweden" />;
}
