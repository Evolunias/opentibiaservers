import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-north-america');
}

export default function TibiaoriginsFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-north-america" />;
}
