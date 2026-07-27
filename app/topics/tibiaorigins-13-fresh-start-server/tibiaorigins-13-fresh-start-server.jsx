import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-fresh-start-server');
}

export default function Tibiaorigins13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-fresh-start-server" />;
}
