import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-north-america');
}

export default function EvoLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-north-america" />;
}
