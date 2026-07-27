import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-evo-server');
}

export default function Otmadness71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-evo-server" />;
}
