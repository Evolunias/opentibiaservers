import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-oldera-server');
}

export default function PvpOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-oldera-server" />;
}
