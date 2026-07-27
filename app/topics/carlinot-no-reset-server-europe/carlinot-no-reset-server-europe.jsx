import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-europe');
}

export default function CarlinotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-europe" />;
}
