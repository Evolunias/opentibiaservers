import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-uk');
}

export default function TibiascapeFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-uk" />;
}
