import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-canada-servers');
}

export default function TibiameCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-canada-servers" />;
}
