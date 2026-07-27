import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-seasonal-server');
}

export default function Originaltibia76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-seasonal-server" />;
}
