import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-europe');
}

export default function MistOfDeathCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-europe" />;
}
