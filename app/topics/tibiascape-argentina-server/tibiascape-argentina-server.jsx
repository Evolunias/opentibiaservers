import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-argentina-server');
}

export default function TibiascapeArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-argentina-server" />;
}
