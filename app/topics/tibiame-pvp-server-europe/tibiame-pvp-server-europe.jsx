import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-europe');
}

export default function TibiamePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-europe" />;
}
