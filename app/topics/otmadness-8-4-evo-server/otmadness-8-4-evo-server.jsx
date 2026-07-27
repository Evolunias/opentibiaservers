import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-evo-server');
}

export default function Otmadness84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-evo-server" />;
}
