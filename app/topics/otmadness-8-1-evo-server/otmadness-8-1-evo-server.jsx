import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-1-evo-server');
}

export default function Otmadness81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-1-evo-server" />;
}
