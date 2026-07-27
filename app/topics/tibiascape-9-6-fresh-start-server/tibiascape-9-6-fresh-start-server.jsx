import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-fresh-start-server');
}

export default function Tibiascape96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-fresh-start-server" />;
}
