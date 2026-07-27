import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-latin-america');
}

export default function CyntaraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-latin-america" />;
}
