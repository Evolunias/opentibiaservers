import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-4-evo-server');
}

export default function Otmadness74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-4-evo-server" />;
}
