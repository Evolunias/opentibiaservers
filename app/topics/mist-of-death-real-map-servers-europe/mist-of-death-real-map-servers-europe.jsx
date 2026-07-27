import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-europe');
}

export default function MistOfDeathRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-europe" />;
}
