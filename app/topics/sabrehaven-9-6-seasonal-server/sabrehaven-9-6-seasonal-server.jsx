import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-seasonal-server');
}

export default function Sabrehaven96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-seasonal-server" />;
}
