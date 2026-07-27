import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-uk');
}

export default function UnlineSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-uk" />;
}
