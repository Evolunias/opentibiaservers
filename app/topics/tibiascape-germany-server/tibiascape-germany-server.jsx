import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-germany-server');
}

export default function TibiascapeGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-germany-server" />;
}
