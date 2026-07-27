import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-europe');
}

export default function TibiascapeFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-europe" />;
}
