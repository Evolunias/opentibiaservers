import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-ots');
}

export default function CarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-ots" />;
}
