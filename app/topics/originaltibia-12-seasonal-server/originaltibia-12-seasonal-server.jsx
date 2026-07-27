import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-seasonal-server');
}

export default function Originaltibia12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-seasonal-server" />;
}
