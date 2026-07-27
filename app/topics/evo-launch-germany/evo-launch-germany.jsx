import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-germany');
}

export default function EvoLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-germany" />;
}
