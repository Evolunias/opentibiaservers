import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-server');
}

export default function TibiameServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-server" />;
}
