import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-usa');
}

export default function TibiascapeFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-usa" />;
}
