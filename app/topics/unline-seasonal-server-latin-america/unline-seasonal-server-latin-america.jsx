import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-latin-america');
}

export default function UnlineSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-latin-america" />;
}
