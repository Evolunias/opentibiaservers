import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-poland');
}

export default function TibiascapeFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-poland" />;
}
