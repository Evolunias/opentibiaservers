import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-europe-server');
}

export default function TibiascapeEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-europe-server" />;
}
