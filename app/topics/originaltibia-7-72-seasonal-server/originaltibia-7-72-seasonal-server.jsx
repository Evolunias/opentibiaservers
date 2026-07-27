import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-seasonal-server');
}

export default function Originaltibia772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-seasonal-server" />;
}
