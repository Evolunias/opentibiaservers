import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-seasonal-server');
}

export default function Sabrehaven772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-seasonal-server" />;
}
