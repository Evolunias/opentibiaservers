import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-seasonal-server');
}

export default function Originaltibia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-seasonal-server" />;
}
