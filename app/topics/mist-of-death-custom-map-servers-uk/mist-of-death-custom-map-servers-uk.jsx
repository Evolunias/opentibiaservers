import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-uk');
}

export default function MistOfDeathCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-uk" />;
}
