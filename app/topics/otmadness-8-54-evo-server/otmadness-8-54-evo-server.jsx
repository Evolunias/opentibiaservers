import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-54-evo-server');
}

export default function Otmadness854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-54-evo-server" />;
}
