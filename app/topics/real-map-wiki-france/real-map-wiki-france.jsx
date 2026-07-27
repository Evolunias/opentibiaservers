import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-france');
}

export default function RealMapWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-france" />;
}
