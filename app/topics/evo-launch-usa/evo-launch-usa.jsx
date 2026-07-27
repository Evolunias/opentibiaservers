import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-usa');
}

export default function EvoLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-usa" />;
}
