import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-europe');
}

export default function MistOfDeathCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-europe" />;
}
