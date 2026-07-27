import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-europe-servers');
}

export default function TibiascapeEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-europe-servers" />;
}
