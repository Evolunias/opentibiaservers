import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-canada');
}

export default function MistOfDeathCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-canada" />;
}
