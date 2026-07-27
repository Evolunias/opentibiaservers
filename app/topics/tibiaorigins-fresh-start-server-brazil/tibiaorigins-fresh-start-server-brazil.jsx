import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-brazil');
}

export default function TibiaoriginsFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-brazil" />;
}
