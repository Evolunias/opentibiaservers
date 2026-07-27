import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-latin-america');
}

export default function SeasonalServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-latin-america" />;
}
