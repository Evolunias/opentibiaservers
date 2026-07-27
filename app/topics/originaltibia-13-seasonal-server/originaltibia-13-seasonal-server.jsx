import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-seasonal-server');
}

export default function Originaltibia13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-seasonal-server" />;
}
