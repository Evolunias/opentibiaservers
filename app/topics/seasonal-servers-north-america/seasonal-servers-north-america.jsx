import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-north-america');
}

export default function SeasonalServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-north-america" />;
}
