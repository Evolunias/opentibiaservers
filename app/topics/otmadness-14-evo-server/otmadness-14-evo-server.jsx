import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-evo-server');
}

export default function Otmadness14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-evo-server" />;
}
