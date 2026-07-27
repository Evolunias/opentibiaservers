import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-chile-servers');
}

export default function TibiascapeChileServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-chile-servers" />;
}
