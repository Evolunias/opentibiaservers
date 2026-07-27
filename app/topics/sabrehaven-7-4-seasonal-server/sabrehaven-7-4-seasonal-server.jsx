import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-seasonal-server');
}

export default function Sabrehaven74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-seasonal-server" />;
}
