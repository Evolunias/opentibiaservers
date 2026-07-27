import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-evo-server');
}

export default function Thaisot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-evo-server" />;
}
