import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-usa');
}

export default function TibiaoriginsFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-usa" />;
}
