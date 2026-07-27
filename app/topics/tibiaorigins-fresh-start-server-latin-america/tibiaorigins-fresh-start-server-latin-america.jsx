import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-latin-america');
}

export default function TibiaoriginsFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-latin-america" />;
}
