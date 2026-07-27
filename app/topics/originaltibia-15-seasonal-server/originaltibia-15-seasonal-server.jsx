import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-seasonal-server');
}

export default function Originaltibia15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-seasonal-server" />;
}
