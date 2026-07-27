import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-evo-server');
}

export default function Otmadness76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-evo-server" />;
}
