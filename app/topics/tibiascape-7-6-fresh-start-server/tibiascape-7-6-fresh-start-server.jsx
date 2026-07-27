import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-fresh-start-server');
}

export default function Tibiascape76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-fresh-start-server" />;
}
