import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-poland-server');
}

export default function TibiascapePolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-poland-server" />;
}
