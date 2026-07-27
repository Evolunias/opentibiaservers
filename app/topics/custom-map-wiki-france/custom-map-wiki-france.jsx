import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-france');
}

export default function CustomMapWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-france" />;
}
