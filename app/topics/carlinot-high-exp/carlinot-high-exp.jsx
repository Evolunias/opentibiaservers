import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp');
}

export default function CarlinotHighExpKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp" />;
}
