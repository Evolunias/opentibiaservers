import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-unline-server');
}

export default function SeasonalUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-unline-server" />;
}
