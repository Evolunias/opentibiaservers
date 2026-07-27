import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-argentina');
}

export default function SeasonalServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-argentina" />;
}
