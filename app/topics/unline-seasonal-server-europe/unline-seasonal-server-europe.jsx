import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-europe');
}

export default function UnlineSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-europe" />;
}
