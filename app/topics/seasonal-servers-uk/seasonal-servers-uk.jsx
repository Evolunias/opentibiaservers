import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-uk');
}

export default function SeasonalServersUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-uk" />;
}
