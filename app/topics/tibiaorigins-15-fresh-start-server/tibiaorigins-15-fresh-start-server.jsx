import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-fresh-start-server');
}

export default function Tibiaorigins15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-fresh-start-server" />;
}
