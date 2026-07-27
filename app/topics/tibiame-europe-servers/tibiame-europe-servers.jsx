import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-europe-servers');
}

export default function TibiameEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-europe-servers" />;
}
