import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-server');
}

export default function TopRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-server" />;
}
