import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-seasonal-server');
}

export default function Originaltibia84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-seasonal-server" />;
}
