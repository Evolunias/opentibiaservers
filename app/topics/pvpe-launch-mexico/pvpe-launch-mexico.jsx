import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-launch-mexico');
}

export default function PvpeLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-launch-mexico" />;
}
