import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-list-poland');
}

export default function SeasonalServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-list-poland" />;
}
