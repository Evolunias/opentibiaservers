import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-fresh-start-server');
}

export default function Tibiascape15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-fresh-start-server" />;
}
