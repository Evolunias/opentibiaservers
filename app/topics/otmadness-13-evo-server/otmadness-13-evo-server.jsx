import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-evo-server');
}

export default function Otmadness13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-evo-server" />;
}
