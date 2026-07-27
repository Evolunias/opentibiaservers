import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-evo-server');
}

export default function Thaisot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-evo-server" />;
}
