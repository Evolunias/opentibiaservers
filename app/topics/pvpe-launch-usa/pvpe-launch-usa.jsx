import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-usa');
}

export default function PvpeLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-usa" />;
}
