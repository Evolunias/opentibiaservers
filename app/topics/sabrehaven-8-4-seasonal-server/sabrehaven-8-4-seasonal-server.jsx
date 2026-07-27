import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-seasonal-server');
}

export default function Sabrehaven84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-seasonal-server" />;
}
