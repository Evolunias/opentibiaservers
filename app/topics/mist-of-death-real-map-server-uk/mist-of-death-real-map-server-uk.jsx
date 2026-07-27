import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-uk');
}

export default function MistOfDeathRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-uk" />;
}
