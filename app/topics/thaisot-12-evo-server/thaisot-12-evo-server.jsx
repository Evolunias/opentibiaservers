import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-evo-server');
}

export default function Thaisot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-evo-server" />;
}
