import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-54-custom-map-server');
}

export default function CalmeraOt854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-54-custom-map-server" />;
}
