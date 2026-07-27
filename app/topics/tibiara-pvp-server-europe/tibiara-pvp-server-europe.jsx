import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-europe');
}

export default function TibiaraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-europe" />;
}
