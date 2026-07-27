import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-evo-server');
}

export default function Otmadness100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-evo-server" />;
}
