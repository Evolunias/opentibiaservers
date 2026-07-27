import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-canada');
}

export default function MistOfDeathCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-canada" />;
}
