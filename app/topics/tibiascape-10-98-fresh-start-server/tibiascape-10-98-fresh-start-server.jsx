import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-fresh-start-server');
}

export default function Tibiascape1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-fresh-start-server" />;
}
