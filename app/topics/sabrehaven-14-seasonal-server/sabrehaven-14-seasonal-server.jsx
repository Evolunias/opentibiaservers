import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-seasonal-server');
}

export default function Sabrehaven14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-seasonal-server" />;
}
