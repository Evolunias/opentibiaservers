import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibianus-server');
}

export default function SeasonalTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibianus-server" />;
}
