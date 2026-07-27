import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiantis-server');
}

export default function SeasonalTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiantis-server" />;
}
