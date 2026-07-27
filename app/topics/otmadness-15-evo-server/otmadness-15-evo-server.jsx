import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-15-evo-server');
}

export default function Otmadness15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-15-evo-server" />;
}
