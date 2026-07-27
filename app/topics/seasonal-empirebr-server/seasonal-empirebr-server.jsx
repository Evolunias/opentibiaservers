import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-empirebr-server');
}

export default function SeasonalEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-empirebr-server" />;
}
