import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-latin-america');
}

export default function DemolidoresSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-latin-america" />;
}
