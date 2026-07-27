import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-launch-south-america');
}

export default function BaiakLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-launch-south-america" />;
}
