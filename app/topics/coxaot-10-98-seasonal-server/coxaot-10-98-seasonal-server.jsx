import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-seasonal-server');
}

export default function Coxaot1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-seasonal-server" />;
}
