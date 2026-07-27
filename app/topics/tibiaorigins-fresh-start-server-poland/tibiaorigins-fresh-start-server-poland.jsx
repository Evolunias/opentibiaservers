import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-poland');
}

export default function TibiaoriginsFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-poland" />;
}
