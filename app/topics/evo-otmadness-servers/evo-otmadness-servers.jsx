import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-otmadness-servers');
}

export default function EvoOtmadnessServersKeywordPage() {
  return <StaticKeywordPage slug="evo-otmadness-servers" />;
}
