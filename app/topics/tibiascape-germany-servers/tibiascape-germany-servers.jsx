import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-germany-servers');
}

export default function TibiascapeGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-germany-servers" />;
}
