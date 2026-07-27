import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-germany');
}

export default function TibiaoriginsFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-germany" />;
}
