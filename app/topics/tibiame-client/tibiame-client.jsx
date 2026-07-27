import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-client');
}

export default function TibiameClientKeywordPage() {
  return <StaticKeywordPage slug="tibiame-client" />;
}
