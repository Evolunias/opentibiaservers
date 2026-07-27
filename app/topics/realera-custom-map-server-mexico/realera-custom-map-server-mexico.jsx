import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-mexico');
}

export default function RealeraCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-mexico" />;
}
