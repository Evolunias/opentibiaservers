import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-canada');
}

export default function EvoLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-canada" />;
}
