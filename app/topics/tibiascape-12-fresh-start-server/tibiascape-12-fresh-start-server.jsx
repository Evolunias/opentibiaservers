import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-fresh-start-server');
}

export default function Tibiascape12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-fresh-start-server" />;
}
