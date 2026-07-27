import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-mexico');
}

export default function TibiaoriginsFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-mexico" />;
}
