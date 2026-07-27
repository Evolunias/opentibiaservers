import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-midhem-server');
}

export default function SeasonalMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-midhem-server" />;
}
