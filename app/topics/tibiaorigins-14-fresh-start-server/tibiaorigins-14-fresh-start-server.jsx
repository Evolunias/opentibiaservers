import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-fresh-start-server');
}

export default function Tibiaorigins14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-fresh-start-server" />;
}
