import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-seasonal-server');
}

export default function Shadowcores96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-seasonal-server" />;
}
