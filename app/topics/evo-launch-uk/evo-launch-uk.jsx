import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-uk');
}

export default function EvoLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-uk" />;
}
