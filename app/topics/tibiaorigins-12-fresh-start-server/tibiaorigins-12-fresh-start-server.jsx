import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-fresh-start-server');
}

export default function Tibiaorigins12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-fresh-start-server" />;
}
