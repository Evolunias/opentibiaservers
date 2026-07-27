import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-canada-server');
}

export default function TibiameCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-canada-server" />;
}
