import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-fresh-start-server');
}

export default function Tibiascape13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-fresh-start-server" />;
}
