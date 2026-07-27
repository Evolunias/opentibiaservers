import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-europe');
}

export default function PvpeLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-europe" />;
}
