import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-europe');
}

export default function EvoLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-europe" />;
}
