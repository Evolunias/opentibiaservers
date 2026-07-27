import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-chile-server');
}

export default function TibiascapeChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-chile-server" />;
}
