import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-seasonal-server');
}

export default function Shadowcores76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-seasonal-server" />;
}
