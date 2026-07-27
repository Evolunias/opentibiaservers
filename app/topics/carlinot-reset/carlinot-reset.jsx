import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-reset');
}

export default function CarlinotResetKeywordPage() {
  return <StaticKeywordPage slug="carlinot-reset" />;
}
