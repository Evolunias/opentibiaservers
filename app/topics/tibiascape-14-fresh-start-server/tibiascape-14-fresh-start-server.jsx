import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-fresh-start-server');
}

export default function Tibiascape14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-fresh-start-server" />;
}
