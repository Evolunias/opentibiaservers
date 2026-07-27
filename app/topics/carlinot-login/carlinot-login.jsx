import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-login');
}

export default function CarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="carlinot-login" />;
}
