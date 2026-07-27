import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-seasonal-server');
}

export default function Sabrehaven100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-seasonal-server" />;
}
