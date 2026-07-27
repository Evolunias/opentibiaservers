import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-uk');
}

export default function MistOfDeathCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-uk" />;
}
