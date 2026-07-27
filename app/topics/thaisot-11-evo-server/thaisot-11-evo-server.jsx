import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-evo-server');
}

export default function Thaisot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-evo-server" />;
}
