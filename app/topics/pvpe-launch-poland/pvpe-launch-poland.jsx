import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-poland');
}

export default function PvpeLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-poland" />;
}
