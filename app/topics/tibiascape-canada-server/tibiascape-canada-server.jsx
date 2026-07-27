import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-canada-server');
}

export default function TibiascapeCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-canada-server" />;
}
