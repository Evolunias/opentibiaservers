import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-poland');
}

export default function EvoLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-poland" />;
}
