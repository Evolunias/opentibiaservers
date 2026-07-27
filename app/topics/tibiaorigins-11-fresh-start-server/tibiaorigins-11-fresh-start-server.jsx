import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-fresh-start-server');
}

export default function Tibiaorigins11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-fresh-start-server" />;
}
