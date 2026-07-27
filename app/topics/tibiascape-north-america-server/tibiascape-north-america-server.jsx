import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-north-america-server');
}

export default function TibiascapeNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-north-america-server" />;
}
