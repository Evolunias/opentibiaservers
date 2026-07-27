import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-poland-servers');
}

export default function TibiascapePolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-poland-servers" />;
}
