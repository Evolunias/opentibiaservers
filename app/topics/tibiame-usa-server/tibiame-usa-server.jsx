import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-usa-server');
}

export default function TibiameUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-usa-server" />;
}
