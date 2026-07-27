import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-evo-servers');
}

export default function Otmadness15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-evo-servers" />;
}
