import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-north-america-servers');
}

export default function TibiascapeNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-north-america-servers" />;
}
