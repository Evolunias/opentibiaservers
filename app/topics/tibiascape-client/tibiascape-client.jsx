import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-client');
}

export default function TibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-client" />;
}
