import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-evo-server');
}

export default function Otmadness12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-evo-server" />;
}
