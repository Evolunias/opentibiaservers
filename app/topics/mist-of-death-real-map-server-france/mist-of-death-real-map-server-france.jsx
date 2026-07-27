import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-france');
}

export default function MistOfDeathRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-france" />;
}
