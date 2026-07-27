import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-evo-servers');
}

export default function Otmadness11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-evo-servers" />;
}
