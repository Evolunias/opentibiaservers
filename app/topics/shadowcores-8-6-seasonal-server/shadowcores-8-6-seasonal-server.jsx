import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-seasonal-server');
}

export default function Shadowcores86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-seasonal-server" />;
}
