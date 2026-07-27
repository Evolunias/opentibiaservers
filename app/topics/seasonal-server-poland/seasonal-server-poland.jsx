import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-poland');
}

export default function SeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-poland" />;
}
