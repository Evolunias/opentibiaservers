import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-fresh-start-server');
}

export default function Tibiascape81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-fresh-start-server" />;
}
