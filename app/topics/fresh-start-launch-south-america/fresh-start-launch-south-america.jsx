import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-launch-south-america');
}

export default function FreshStartLaunchSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-launch-south-america" />;
}
