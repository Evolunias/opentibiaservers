import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiame-server');
}

export default function NonPvpTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiame-server" />;
}
