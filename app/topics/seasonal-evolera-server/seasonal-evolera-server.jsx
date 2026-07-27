import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-evolera-server');
}

export default function SeasonalEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-evolera-server" />;
}
