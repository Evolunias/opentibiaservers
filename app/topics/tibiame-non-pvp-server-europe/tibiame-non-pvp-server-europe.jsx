import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-europe');
}

export default function TibiameNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-europe" />;
}
