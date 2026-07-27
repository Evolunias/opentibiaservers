import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-poland');
}

export default function SeasonalOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-poland" />;
}
