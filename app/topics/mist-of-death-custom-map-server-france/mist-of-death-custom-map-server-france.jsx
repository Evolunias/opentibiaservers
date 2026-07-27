import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-france');
}

export default function MistOfDeathCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-france" />;
}
