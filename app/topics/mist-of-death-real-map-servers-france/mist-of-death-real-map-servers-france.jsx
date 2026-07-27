import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-france');
}

export default function MistOfDeathRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-france" />;
}
