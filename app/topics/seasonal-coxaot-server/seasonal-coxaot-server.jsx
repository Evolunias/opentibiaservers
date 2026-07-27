import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-coxaot-server');
}

export default function SeasonalCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-coxaot-server" />;
}
