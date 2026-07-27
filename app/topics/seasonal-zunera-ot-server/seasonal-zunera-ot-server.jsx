import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-zunera-ot-server');
}

export default function SeasonalZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-zunera-ot-server" />;
}
