import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-classicus-server');
}

export default function SeasonalClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-classicus-server" />;
}
