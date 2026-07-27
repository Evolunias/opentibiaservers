import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-pvp-server-europe');
}

export default function TibiaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-pvp-server-europe" />;
}
