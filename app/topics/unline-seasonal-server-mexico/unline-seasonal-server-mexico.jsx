import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-mexico');
}

export default function UnlineSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-mexico" />;
}
