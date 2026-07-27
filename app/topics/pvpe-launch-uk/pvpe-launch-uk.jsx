import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-uk');
}

export default function PvpeLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-uk" />;
}
