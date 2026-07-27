import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-evo-server');
}

export default function Otmadness11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-evo-server" />;
}
