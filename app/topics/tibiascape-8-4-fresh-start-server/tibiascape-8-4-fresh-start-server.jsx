import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-fresh-start-server');
}

export default function Tibiascape84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-fresh-start-server" />;
}
