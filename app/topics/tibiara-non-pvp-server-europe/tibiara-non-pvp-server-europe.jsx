import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-europe');
}

export default function TibiaraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-europe" />;
}
