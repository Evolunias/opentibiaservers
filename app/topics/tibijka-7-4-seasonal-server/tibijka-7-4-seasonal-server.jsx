import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-seasonal-server');
}

export default function Tibijka74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-seasonal-server" />;
}
