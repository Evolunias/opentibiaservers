import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-wars');
}

export default function TibiascapeWarsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-wars" />;
}
