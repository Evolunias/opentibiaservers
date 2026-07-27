import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-fresh-start-server');
}

export default function Tibiaorigins100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-fresh-start-server" />;
}
