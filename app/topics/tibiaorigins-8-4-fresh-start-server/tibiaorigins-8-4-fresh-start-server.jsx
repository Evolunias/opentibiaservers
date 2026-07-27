import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-fresh-start-server');
}

export default function Tibiaorigins84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-fresh-start-server" />;
}
