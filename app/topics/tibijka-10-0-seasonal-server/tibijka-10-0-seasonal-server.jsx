import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-seasonal-server');
}

export default function Tibijka100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-seasonal-server" />;
}
