import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-europe');
}

export default function SeasonalServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-europe" />;
}
