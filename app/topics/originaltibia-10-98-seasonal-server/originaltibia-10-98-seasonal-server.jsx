import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-seasonal-server');
}

export default function Originaltibia1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-seasonal-server" />;
}
