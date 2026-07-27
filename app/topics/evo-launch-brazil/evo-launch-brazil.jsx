import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-brazil');
}

export default function EvoLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-brazil" />;
}
