import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-europe-server');
}

export default function TibiameEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-europe-server" />;
}
