import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-europe');
}

export default function TibiaoriginsFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-europe" />;
}
