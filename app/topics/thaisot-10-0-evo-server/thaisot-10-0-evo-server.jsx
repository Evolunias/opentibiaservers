import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-evo-server');
}

export default function Thaisot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-evo-server" />;
}
