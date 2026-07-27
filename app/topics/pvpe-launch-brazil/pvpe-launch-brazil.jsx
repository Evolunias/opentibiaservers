import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-brazil');
}

export default function PvpeLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-brazil" />;
}
