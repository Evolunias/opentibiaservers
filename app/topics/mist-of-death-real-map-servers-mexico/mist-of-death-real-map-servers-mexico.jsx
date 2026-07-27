import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-mexico');
}

export default function MistOfDeathRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-mexico" />;
}
