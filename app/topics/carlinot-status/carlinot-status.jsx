import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-status');
}

export default function CarlinotStatusKeywordPage() {
  return <StaticKeywordPage slug="carlinot-status" />;
}
