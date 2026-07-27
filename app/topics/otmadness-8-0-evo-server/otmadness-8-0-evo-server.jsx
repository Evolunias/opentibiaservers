import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-0-evo-server');
}

export default function Otmadness80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-0-evo-server" />;
}
