import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-seasonal-server');
}

export default function Tibijka96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-seasonal-server" />;
}
