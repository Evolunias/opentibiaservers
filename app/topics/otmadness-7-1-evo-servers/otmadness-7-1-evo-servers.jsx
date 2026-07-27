import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-evo-servers');
}

export default function Otmadness71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-evo-servers" />;
}
