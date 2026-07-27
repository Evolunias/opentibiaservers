import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-canada');
}

export default function TibiascapeFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-canada" />;
}
