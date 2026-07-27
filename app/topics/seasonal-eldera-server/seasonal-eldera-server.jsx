import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-eldera-server');
}

export default function SeasonalElderaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-eldera-server" />;
}
