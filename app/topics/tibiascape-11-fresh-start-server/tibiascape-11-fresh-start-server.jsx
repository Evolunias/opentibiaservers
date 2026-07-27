import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-fresh-start-server');
}

export default function Tibiascape11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-fresh-start-server" />;
}
