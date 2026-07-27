import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-map');
}

export default function HarmoniaOtMapKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-map" />;
}
