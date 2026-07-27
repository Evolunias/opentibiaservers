import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-ot-server-argentina');
}

export default function SeasonalOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-ot-server-argentina" />;
}
