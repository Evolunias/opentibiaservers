import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-europe');
}

export default function RubinotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-europe" />;
}
