import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-seasonal-server');
}

export default function Originaltibia96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-seasonal-server" />;
}
