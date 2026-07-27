import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-seasonal-server');
}

export default function Originaltibia11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-seasonal-server" />;
}
