import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-saintsot-server');
}

export default function SeasonalSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-saintsot-server" />;
}
