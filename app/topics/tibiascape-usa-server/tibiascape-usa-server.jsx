import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-usa-server');
}

export default function TibiascapeUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-usa-server" />;
}
