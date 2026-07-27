import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-germany');
}

export default function SeasonalServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-germany" />;
}
