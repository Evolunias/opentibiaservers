import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-germany');
}

export default function TibiascapeFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-germany" />;
}
