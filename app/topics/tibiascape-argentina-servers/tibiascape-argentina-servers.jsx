import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-argentina-servers');
}

export default function TibiascapeArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-argentina-servers" />;
}
