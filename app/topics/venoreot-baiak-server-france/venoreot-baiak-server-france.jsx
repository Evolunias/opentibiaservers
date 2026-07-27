import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-france');
}

export default function VenoreotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-france" />;
}
