import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-seasonal-server');
}

export default function Originaltibia86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-seasonal-server" />;
}
