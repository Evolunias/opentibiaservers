import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-uk');
}

export default function MistOfDeathRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-uk" />;
}
