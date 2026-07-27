import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-mexico');
}

export default function TibiascapeFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-mexico" />;
}
