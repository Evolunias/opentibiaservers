import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-france');
}

export default function TibiaoriginsFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-france" />;
}
